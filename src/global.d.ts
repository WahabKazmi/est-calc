interface QuestionType {
    type: 'slider' | 'radio';
    min: number;
    max: number;
    price: number;
    name: string;
    group: string;
    radio: {
        price: number;
        name: string;
        value: string;
        checked: boolean;
    }[]
}