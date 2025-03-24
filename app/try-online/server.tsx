import ky from 'ky';

export type FileTree = {
    type: 'file',
    name: string,
} | {
    type: 'directory'
    name: string,
    children: FileTree[],
};

export function get_bench(path: string) {
    return ky.get(`http://cap.ecn.purdue.edu:9723/bench/${path}`).text();
}

export function show_all_bench() : Promise<FileTree[]> {
    return ky.get(`http://cap.ecn.purdue.edu:9723/bench/show-all`).json();
}

export type Request = {
    command: string,
    args: string[],
    timeout: number,
    input_file?: string,
}

export type Response = Request & {
    result: {
        status: 'ok' | 'error',
        retval: number,
        time: number,
        stdout: string,
        stderr: string,
    } | {
        status: 'timeout',
    },
}

export async function run_dryadsynth(input_file: string) : Promise<Response> {
    const req = {
        command: 'dryadsynth',
        args: [],
        timeout: 60000,
        input_file,
    };
    
    try{
        return await ky.post(`http://cap.ecn.purdue.edu:9723/solvers/run/dryadsynth`, {
            json: req,
            timeout: 60000,
        }).json();
    } catch (error) {
        return {...req, result: {status: 'timeout'}};
    }
}



