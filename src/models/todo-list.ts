export class TodoList {
    id?: string;
    name: string;
    items: Set<Item>;
    date?: number;
}

export class Item {
    id?: string;
    name: string;
    state: boolean;
    description: string;
    date?: number;
    constructor(name?: string, state?: boolean, description?: string) {
        this.name = name || '';
        this.state = state || false;
        this.description = description || '';
        this.date = Date.now();
    }
}

