import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { MarkdownTextarea } from '@/components/ui/markdown-textarea';
import { SelectMultiple } from '@/components/ui/select-multiple';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { FormEvent } from 'react';

type PostFormProps = {
    content: string;
    title: string;
    id: number | null;
    categoriesId: Array<number>;
    categoriesItems: FormatterObject[];
};

type ModalFormProps = {
    content: string;
    image: File | null;
    title: string;
    id: number | null;
    categories: Array<number>;
    _method: 'POST' | 'PUT';
};

export const PostForm = ({ title, content, categoriesId, id, categoriesItems }: PostFormProps) => {
    const { post, data, setData, errors, processing } = useForm<ModalFormProps>({
        title,
        content,
        image: null,
        categories: categoriesId,
        id,
        _method: id !== null ? 'PUT' : 'POST',
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#post.store'), {
                  preserveState: true,

                  forceFormData: true,
              })
            : post(route('#post.update', { id }), {
                  preserveState: true,
                  forceFormData: true,
              });
    };

    const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] ?? null;
        if (file) {
            setData('image', file);
        }
    };

    return (
        <form onSubmit={onSubmit} className="grid gap-4 py-4" encType="multipart/form-data">
            <div className="grid gap-1">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" onChange={handleFilesSelected} />
                <InputError message={errors.image} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                <InputError message={errors.title} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="categories">Categories</Label>
                <SelectMultiple
                    values={categoriesId.map((cId) => cId.toString())}
                    placeholder="Selectionner au mimimun 2 categories"
                    onChange={(ids) =>
                        setData(
                            'categories',
                            ids.map((i) => parseInt(i)),
                        )
                    }
                    options={categoriesItems.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.categories} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="content">Contenu (Markdown)</Label>
                <MarkdownTextarea id="content" defaultValue={data.content} onChange={(v) => setData('content', v)} />
                <InputError message={errors.content} />
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
