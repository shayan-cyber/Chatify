export interface ChatResponse{
    image?:File,
    type: string,
    data: string,
}

export interface ImageAnalysisHistory{
    id:string,
    imageAnalyzedText: string,
    imagePath?: string,
    timestamp: string,
    text?: string,
}

