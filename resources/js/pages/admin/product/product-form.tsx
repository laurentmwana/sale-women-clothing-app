import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { SelectMultiple } from '@/components/ui/select-multiple';
import { Textarea } from '@/components/ui/textarea';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { FormEvent } from 'react';

type ProductFormProps = {
    description: string;
    name: string;
    id: number | null;
    categoriesId: Array<number>;
    price: number;
    categoriesItems: FormatterObject[];
};

type ModalFormProps = {
    description: string;
    image: File | null;
    price: number;
    name: string;
    id: number | null;
    categories: Array<number>;
    _method: 'POST' | 'PUT';
};

export const ProductForm = ({ name, description, categoriesId, id, categoriesItems, price }: ProductFormProps) => {
    const { post, data, setData, errors, processing } = useForm<ModalFormProps>({
        name,
        description,
        image: null,
        categories: categoriesId,
        price,
        id,
        _method: id !== null ? 'PUT' : 'POST',
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#product.store'), {
                  preserveState: true,

                  forceFormData: true,
              })
            : post(route('#product.update', { id }), {
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
                <Label htmlFor="name">Nom</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                <InputError message={errors.name} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="price">Prix</Label>
                <Input type="number" id="price" value={data.price} onChange={(e) => setData('price', parseInt(e.target.value))} />
                <InputError message={errors.price} />
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
                <Label htmlFor="description">Description</Label>
                <Textarea value={data.description} id="description" onChange={(e) => setData('description', e.target.value)} />
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
