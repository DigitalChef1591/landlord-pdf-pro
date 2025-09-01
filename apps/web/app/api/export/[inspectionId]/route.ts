import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServiceClient } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ inspectionId: string }> }
) {
  try {
    const { inspectionId } = await params;
    const supabase = createSupabaseServiceClient();

    // Get inspection with property details
    const { data: inspection, error } = await supabase
      .from('inspections')
      .select(`
        *,
        properties (
          name,
          address
        )
      `)
      .eq('id', inspectionId)
      .single();

    if (error || !inspection) {
      return NextResponse.json({ error: 'Inspection not found' }, { status: 404 });
    }

    // Generate simple HTML for PDF conversion
    const htmlContent = generateInspectionHTML(inspection);

    // For now, return HTML that can be printed as PDF
    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': `inline; filename="inspection-${inspectionId}.html"`,
      },
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}

function generateInspectionHTML(inspection: any): string {
  const property = inspection.properties;
  const rooms = inspection.payload || {};

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Property Inspection Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #2563eb;
            font-size: 28px;
            margin: 0;
        }
        .header p {
            color: #666;
            font-size: 16px;
            margin: 10px 0;
        }
        .property-info {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .property-info h2 {
            color: #1e40af;
            margin-top: 0;
        }
        .info-row {
            display: flex;
            margin-bottom: 10px;
        }
        .info-label {
            font-weight: bold;
            width: 150px;
        }
        .room-section {
            margin-bottom: 30px;
            break-inside: avoid;
        }
        .room-title {
            background: #e5e7eb;
            padding: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #374151;
            margin-bottom: 15px;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .items-table th,
        .items-table td {
            border: 1px solid #e5e7eb;
            padding: 12px;
            text-align: left;
        }
        .items-table th {
            background: #f3f4f6;
            font-weight: bold;
        }
        .condition-good {
            color: #059669;
            font-weight: bold;
        }
        .condition-repair {
            color: #d97706;
            font-weight: bold;
        }
        .condition-na {
            color: #6b7280;
        }
        .signatures {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
        }
        .signature-box {
            width: 300px;
            text-align: center;
        }
        .signature-line {
            border-top: 2px solid #000;
            margin-bottom: 10px;
            height: 50px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        @media print {
            body { margin: 0; }
            .room-section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>PROPERTY INSPECTION REPORT</h1>
        <p>${inspection.type === 'move_in' ? 'Move-In' : 'Move-Out'} Inspection</p>
        <p>Date: ${new Date(inspection.date).toLocaleDateString()}</p>
    </div>

    <div class="property-info">
        <h2>Property Information</h2>
        <div class="info-row">
            <div class="info-label">Property:</div>
            <div>${property?.name || 'N/A'}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Address:</div>
            <div>${property?.address || 'N/A'}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Inspection Date:</div>
            <div>${new Date(inspection.date).toLocaleDateString()}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Type:</div>
            <div>${inspection.type === 'move_in' ? 'Move-In Inspection' : 'Move-Out Inspection'}</div>
        </div>
    </div>

    ${Object.entries(rooms).map(([roomName, items]: [string, any]) => `
        <div class="room-section">
            <div class="room-title">${roomName}</div>
            <table class="items-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Condition</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(items).map(([itemName, itemData]: [string, any]) => `
                        <tr>
                            <td><strong>${itemName}</strong></td>
                            <td class="${getConditionClass(itemData.condition)}">
                                ${getConditionText(itemData.condition)}
                            </td>
                            <td>${itemData.notes || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `).join('')}

    <div class="signatures">
        <div class="signature-box">
            <div class="signature-line"></div>
            <div>Tenant Signature</div>
            <div>Date: ___________</div>
        </div>
        <div class="signature-box">
            <div class="signature-line"></div>
            <div>Landlord/Agent Signature</div>
            <div>Date: ___________</div>
        </div>
    </div>

    <div class="footer">
        <p>Generated by Landlord PDF Pro - ${new Date().toLocaleDateString()}</p>
        <p>This document serves as an official record of the property inspection.</p>
    </div>

    <script>
        // Auto-print when opened
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 500);
        };
    </script>
</body>
</html>
  `;
}

function getConditionClass(condition: string): string {
  switch (condition) {
    case 'good': return 'condition-good';
    case 'needs_repair': return 'condition-repair';
    case 'na': return 'condition-na';
    default: return '';
  }
}

function getConditionText(condition: string): string {
  switch (condition) {
    case 'good': return 'Good';
    case 'needs_repair': return 'Needs Repair';
    case 'na': return 'N/A';
    default: return '-';
  }
}
