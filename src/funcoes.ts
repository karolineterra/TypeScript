function addNumber(x: number, y:number): number {
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string): number | string {
    return phone
} 

async function getDatabase(id: number): Promise<number | string> {
    return "karol";
}

let soma: number = addNumber(4, 7);

console.log(CallToPhone("1113311"));
console.log(CallToPhone(12343423));


