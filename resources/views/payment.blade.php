@component('mail::message')
# Confirmation de Paiement

Bonjour **{{ $user->name }}**,

Nous vous informons que les paiements pour vos produits ont bien été effectués avec succès.

## Liste des produits :
@component('mail::table')
| Nom du produit      | Prix   |
|---------------------|---------|
@foreach ($products as $product)
| {{ $product->name }} | {{ number_format($product->price, 2) }} Fc |
@endforeach
@endcomponent

Merci pour votre confiance.

Cordialement,<br>
L'équipe **{{ config('app.name') }}**
@endcomponent
