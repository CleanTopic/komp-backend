import { Body, Controller, Res, Post, StreamableFile } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';


@Controller('pdf')
export class PdfController {

    constructor(private readonly pdfService: PdfService) { }


    @Post('generate')
    async generate(
        @Body('html') html: string
    ) {
        const pdf = await this.pdfService.generatePdf(html);

        return new StreamableFile(pdf, {
            type: 'application/pdf',
            disposition: 'attachment; filename="offer.pdf"',
        });
    }
}
