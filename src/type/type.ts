export interface Todo {
    id?: string;
    todo: string;
    stats: Stats;
}
export enum Stats {
    notDone = "❌",
    Done = "✅"
}
export enum ButtonsType {
    Delete = "Delete-Button",
    Update = "Update-Button"
}