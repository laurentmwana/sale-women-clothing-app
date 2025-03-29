import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { SelectMultiple } from '@/components/ui/select-multiple';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { Pen, Plus, Save } from 'lucide-react';
import { FormEvent, useState } from 'react';

type UseModalFormOptionProps = { name: string; alias: string; id: number | null; universities: number[] };

type ModalFormOptionProps = { name: string; alias: string; id: number | null; universities: number[]; allUniversities: FormatterObject[] };

export const ModalFormOption = ({ name, alias, id, universities, allUniversities }: ModalFormOptionProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { post, put, data, setData, errors, processing, clearErrors, reset } = useForm<UseModalFormOptionProps>({ name, alias, id, universities });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#option.store'), {
                  preserveState: true,
                  onSuccess: () => {
                      setOpenModal(false);
                  },
              })
            : put(route('#option.update', { id }), {
                  preserveState: true,
                  onSuccess: () => {
                      setOpenModal(false);
                  },
              });
    };

    const onOpenChangeModal = (stateModal: boolean) => {
        setOpenModal(stateModal);
        clearErrors();
        reset();
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)} size="sm" variant="outline">
                {id === null ? <Plus size={15} /> : <Pen size={15} />}
            </Button>
            <Dialog open={openModal} onOpenChange={onOpenChangeModal} defaultOpen={openModal}>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle>{id === null ? "Création d'une option" : `Modification de la option #${id}`}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={onSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nom de l'option</Label>
                            <Input
                                placeholder="Ps: Réseaux Informatique"
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="alias">Alias</Label>
                            <Input placeholder="Ps: Math-Info" id="alias" value={data.alias} onChange={(e) => setData('alias', e.target.value)} />
                            <InputError message={errors.alias} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="universities">Universités</Label>
                            <SelectMultiple
                                onChange={(us) =>
                                    setData(
                                        'universities',
                                        us.map((u) => parseInt(u)),
                                    )
                                }
                                values={data.universities.map((u) => u.toString())}
                                placeholder="Selectionner 3 universités"
                                options={allUniversities.map((u) => {
                                    return {
                                        label: u.name,
                                        value: u.id,
                                    };
                                })}
                            />
                            <InputError message={errors.universities} />
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
                </DialogContent>
            </Dialog>
        </>
    );
};
