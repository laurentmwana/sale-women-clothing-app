import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { SelectSingle } from '@/components/ui/select-single';
import { Textarea } from '@/components/ui/textarea';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Pen } from 'lucide-react';
import { FormEvent } from 'react';

type ClientFormProps = { genders: FormatterObject[] };

export const ClientForm = ({ genders }: ClientFormProps) => {
    const { data, post, processing, setData, errors, reset } = useForm({
        name: '',
        firstname: '',
        address: '',
        phone: '',
        gender: '',
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('no-empty-client.complete'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                <InputError message={errors.name} />
            </div>

            <div>
                <Label htmlFor="firstname">Postnom</Label>
                <Input id="firstname" value={data.firstname} onChange={(e) => setData('firstname', e.target.value)} />
                <InputError message={errors.firstname} />
            </div>

            <div>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input id="phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                <InputError message={errors.phone} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="gender">Genre</Label>
                <SelectSingle
                    value={data.gender}
                    placeholder="Selectionner le genre"
                    onChange={(genderId) => setData('gender', genderId)}
                    options={genders.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.gender} />
            </div>

            <div>
                <Label htmlFor="address">Adresse</Label>
                <Textarea id="address" value={data.address} onChange={(e) => setData('address', e.target.value)} />
                <InputError message={errors.address} />
            </div>

            <div>
                <Button variant="secondary" size="sm" type="submit">
                    {processing ? <Loader /> : <Pen size={15} />}
                </Button>
            </div>
        </form>
    );
    return <></>;
};
