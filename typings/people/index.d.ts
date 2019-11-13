declare namespace People {
    export interface Person {
        id: number;
        title: string;
        subtitle: string;
        car: {
            name: string;
            year: number;
        };
    }
}
