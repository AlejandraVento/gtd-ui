export default function requiresModification(expiration_date) {
    if (!expiration_date) return false;
    const today = new Date();
    const expiration = new Date(expiration_date);
    return expiration < today;
}
