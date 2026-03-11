import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';




@Injectable()
export class PdfService {


    async generatePdf(html: string): Promise<Buffer> {
        
        const browser = await puppeteer.launch();
        
        const page = await browser.newPage();
        
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                bottom: '0mm',
                left: '0mm',
                right: '0mm'
            }
        });
        
        await browser.close();
        
        return Buffer.from(pdfBuffer);
    }


}
