import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { SelectSingle } from '@/components/ui/select-single';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { FormEvent } from 'react';

type DepositFormProps = {
    id: number | null;
    level_id: number;
    work_pratical_id: number;
    price: number;
    start_at: string;
    end_at: string;
    workPraticals: FormatterObject[];
    levels: FormatterObject[];
};

type ModalFormProps = {
    id: number | null;
    level_id: number;
    work_pratical_id: number;
    price: number;
    start_at: string;
    end_at: string;
};

export const DepositForm = ({ id, price, workPraticals, work_pratical_id, level_id, levels, end_at, start_at }: DepositFormProps) => {
    const { post, data, put, setData, errors, processing } = useForm<ModalFormProps>({
        id,
        price,
        work_pratical_id,
        level_id,
        end_at,
        start_at,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#deposit.store'), {
                  preserveState: true,
              })
            : put(route('#deposit.update', { id }), {
                  preserveState: true,
              });
    };

    return (
        <form onSubmit={onSubmit} className="grid gap-4 py-4" encType="multipart/form-data">
            <div className="grid gap-1">
                <Label htmlFor="price">Prix</Label>
                <Input type="number" id="price" value={data.price} onChange={(e) => setData('price', parseInt(e.target.value))} />
                <InputError message={errors.price} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="start_at">Début</Label>
                <Input type="date" id="start_at" value={data.start_at} onChange={(e) => setData('start_at', e.target.value)} />
                <InputError message={errors.start_at} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="end_at">Fin</Label>
                <Input type="date" id="end_at" value={data.end_at} onChange={(e) => setData('end_at', e.target.value)} />
                <InputError message={errors.end_at} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="work_pratical_id">Travail pratique</Label>
                <SelectSingle
                    value={data.work_pratical_id.toString()}
                    placeholder="Selectionner le cours"
                    onChange={(c) => setData('work_pratical_id', parseInt(c))}
                    options={workPraticals.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.work_pratical_id} />
            </div>

            <div className="grid gap-1">
                <Label htmlFor="level_id">Promotion</Label>
                <SelectSingle
                    value={data.level_id.toString()}
                    placeholder="Selectionner une promotion"
                    onChange={(c) => setData('level_id', parseInt(c))}
                    options={levels.map((c) => {
                        return {
                            label: c.name,
                            value: c.id,
                        };
                    })}
                />
                <InputError message={errors.level_id} />
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
