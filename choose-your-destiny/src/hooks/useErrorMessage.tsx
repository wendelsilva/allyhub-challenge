import { toast } from 'react-toastify';

export function useErrorMessage(message: string, autoClose: number) {
    toast.error(message, {autoClose: autoClose})
}