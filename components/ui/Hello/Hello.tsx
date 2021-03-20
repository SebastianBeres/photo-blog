import { FC } from 'react';
import cx from 'classnames';

type HelloProps = {
    status: boolean;
    onClick: () => void;
};

const Hello: FC<HelloProps> = ({ children, onClick, status }) => {
    return (
        <button onClick={onClick} className="focus:outline-none">
            <h1
                className={cx('ext-xl tracking-wide text-gray-400', {
                    'text-gray-600': status,
                })}
            >
                {status ? 'Hello World Clicked' : children}
            </h1>
        </button>
    );
};

export default Hello;
