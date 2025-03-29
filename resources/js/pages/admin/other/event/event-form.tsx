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
import { FormEvent } from 'react';

type EventFormProps = {
    title: string;
    description: string;
    type: string;
    start_at: string;
    id: number | null;
    types: FormatterObject[];
};
type ModalFormProps = {
    title: string;
    description: string;
    type: string;
    start_at: string;
    id: number | null;
    image: File | null;
    _method: 'POST' | 'PUT';
};

export const EventForm = ({ types, type, title, description, start_at, id }: EventFormProps) => {
    const { post, data, setData, errors, processing } = useForm<ModalFormProps>({
        type,
        title,
        description,
        start_at,
        id,
        image: null,
        _method: id !== null ? 'PUT' : 'POST',
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#event.store'), {
                  preserveState: true,
              })
            : post(route('#event.update', { id }), {
                  preserveState: true,
              });
    };

    const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] ?? null;
        if (file) {
            setData('image', file);
        }
    };

    return (
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" onChange={handleFilesSelected} />
                <InputError message={errors.image} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                <InputError message={errors.title} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="start_at">Début</Label>
                <Input type="datetime-local" id="start_at" value={data.start_at} onChange={(e) => setData('start_at', e.target.value)} />
                <InputError message={errors.start_at} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="type">Type</Label>
                <SelectSingle
                    value={data.type.toString()}
                    placeholder="Selectionner un type"
                    onChange={(optionId) => setData('type', optionId)}
                    options={types.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.type} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="description">Description</Label>
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
