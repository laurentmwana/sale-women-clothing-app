import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { SelectSingle } from '@/components/ui/select-single';
import { FormatterObject } from '@/types';
import { useForm } from '@inertiajs/react';
import { BadgeDollarSign, LucideDollarSign, Save } from 'lucide-react';
import { FormEvent, useState } from 'react';

type ModalFormPaymentProps = {
    deposit_id: number;
    student_id: number;
    id: number | null;
    students: FormatterObject[];
};

type UseFormPaymentProps = {
    deposit_id: number;
    student_id: number;
    id: number | null;
};

export const ModalFormPayment = ({ deposit_id, student_id, id, students}: ModalFormPaymentProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { post, put, data, setData, errors, processing, clearErrors, reset } = useForm<UseFormPaymentProps>({
        deposit_id,
        student_id,
        id,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        id === null
            ? post(route('#payment.store'), {
                  preserveState: true,
                  onSuccess: () => {
                      setOpenModal(false);
                  },
              })
            : put(route('#payment.update', { id }), {
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
                {id === null ? <BadgeDollarSign size={15} /> : <LucideDollarSign size={15} />}
            </Button>
            <Dialog open={openModal} onOpenChange={onOpenChangeModal} defaultOpen={openModal}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>{id === null ? "Création d'un paiment" : `Modification du paiement #${id}`}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={onSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Input type="hidden" value={data.deposit_id} />
                            <InputError message={errors.deposit_id} />
                        </div>

                        <div className="grid gap-1">
                            <Label htmlFor="student_id">Etudiant</Label>
                            <SelectSingle
                                value={data.student_id.toString()}
                                placeholder="Selectionner un étudiant"
                                onChange={(c) => setData('student_id', parseInt(c))}
                                options={students.map((c) => {
                                    return {
                                        label: c.name,
                                        value: c.id,
                                    };
                                })}
                            />
                            <InputError message={errors.student_id} />
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
