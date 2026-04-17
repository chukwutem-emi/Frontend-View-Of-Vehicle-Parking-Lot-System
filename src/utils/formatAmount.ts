export const formattedAmount = (totalAmount: number) => {
    return new Intl.NumberFormat("en-NG", {
        style    : "currency",
        currency : "NGN"
    }).format(totalAmount);
};