import { FormatterObject } from '@/types';

type FilterAllProps = {
    universities: FormatterObject[];
    options: FormatterObject[];
    levels: FormatterObject[];
    courses: FormatterObject[];
    years: FormatterObject[];
};

export const FilterAll = ({ universities, options, levels, courses, years }: FilterAllProps) => {
    return (
        <div className="grid grid-cols-1 gap-5">
            <div className="container-card"></div>
        </div>
    );
};
