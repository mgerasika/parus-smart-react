import { ReactNode } from 'react';

interface IProps {
    isLoading: boolean;
    children: ReactNode;
}
export const Loading = ({ children }: IProps): JSX.Element => {
    return <div>{children}</div>;
};
