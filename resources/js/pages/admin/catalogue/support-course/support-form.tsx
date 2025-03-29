import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { MarkdownTextarea } from '@/components/ui/markdown-textarea';
import { SelectSingle } from '@/components/ui/select-single';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { FormEvent, useState } from 'react';

type SupportFormProps = {
    id: number | null;
    course_id: number;
    year_academic_id: number;
    title: string;
    description: string;
    courses: FormatterObject[];
    years: FormatterObject[];
};

type ModalFormProps = {
    course_id: number;
    year_academic_id: number;
    title: string;
    description: string;
    document: File | null;
    id: number | null;
    _method: 'POST' | 'PUT';
};

export const SupportForm = ({ id, description, title, course_id, year_academic_id, courses, years }: SupportFormProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { post, data, setData, errors, processing, clearErrors, reset } = useForm<ModalFormProps>({
        document: null,
        description,
        title,
        course_id,
        year_academic_id,
        _method: id !== null ? 'PUT' : 'POST',
        id,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#support-course.store'), {
                  preserveState: true,
                  forceFormData: true,
              })
            : post(route('#support-course.update', { id }), {
                  preserveState: true,
                  forceFormData: true,
              });
    };

    const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] ?? null;
        if (file) {
            setData('document', file);
        }
    };

    return (
        <form onSubmit={onSubmit} className="grid gap-4 py-4" encType="multipart/form-data">
            <div className="grid gap-1">
                <Label htmlFor="document">Document</Label>
                <Input id="document" type="file" onChange={handleFilesSelected} />
                <InputError message={errors.document} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                <InputError message={errors.title} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="course_id">Cours</Label>
                <SelectSingle
                    value={data.course_id.toString()}
                    placeholder="Selectionner le cours"
                    onChange={(c) => setData('course_id', parseInt(c))}
                    options={courses.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.course_id} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="year_academic_id">Année académique</Label>
                <SelectSingle
                    value={data.year_academic_id.toString()}
                    placeholder="Selectionner l'année académique"
                    onChange={(c) => setData('year_academic_id', parseInt(c))}
                    options={years.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.year_academic_id} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="description">Description </Label>

                <MarkdownTextarea id="description" defaultValue={data.description} onChange={(v) => setData('description', v)} />

                <InputError message={errors.description} />
            </div>

            <div>
                <Button variant="outline" size="sm" type="submit">
                    {processing ? (
                        <div className="flex gap-2">
                            <Loader size={16} />
                        </div>
                    ) : (
                        <Save size={15} />
                    )}
                </Button>
            </div>
        </form>
    );
};
