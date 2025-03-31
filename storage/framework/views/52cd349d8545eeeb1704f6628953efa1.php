<?php $__env->startComponent('mail::message'); ?>
# Confirmation de Paiement

Bonjour **<?php echo e($user->name); ?>**,

Nous vous informons que les paiements pour vos produits ont bien été effectués avec succès.

## Liste des produits :
<?php $__env->startComponent('mail::table'); ?>
| Nom du produit      | Prix   |
|---------------------|---------|
<?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
| <?php echo e($product->name); ?> | <?php echo e(number_format($product->price, 2)); ?> Fc |
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php echo $__env->renderComponent(); ?>

Merci pour votre confiance.

Cordialement,<br>
L'équipe **<?php echo e(config('app.name')); ?>**
<?php echo $__env->renderComponent(); ?>
<?php /**PATH F:\laravel-app\sale-women-clothing-app\resources\views/payment.blade.php ENDPATH**/ ?>