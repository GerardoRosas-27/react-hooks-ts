
export interface ConfigApp{
    title: string;
    content: number;
}

export interface Task{
    id: number;
    name: string;
    description?: string;
    url?: string;
}

export interface GeneralApp{
    config_app: ConfigApp;
    list_task: Task[];
}
export interface Props<T>{
    props: T;
}
export interface PropsEvents<T,M>{
    props: T;
    event: (m:M) => void;
}
export interface Event<T>{
    event: (t:T) => void;
}
export interface EventReturn<T,M>{
    event: (t:T) => M;
}