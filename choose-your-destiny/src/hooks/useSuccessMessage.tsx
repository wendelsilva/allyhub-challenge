import { toast } from 'react-toastify';

export function useSuccessMessage(message: string, autoClose: number) {
    toast.success(message, {autoClose: autoClose})
}