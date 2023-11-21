export type EmailMessage = {
	address: string;
	subject: string;
	body: string;
};

export function generateMailtoLink({ address, subject, body }: EmailMessage): string {
	return `mailto:${address}?subject=${subject}&body=${encodeURIComponent(body)}`;
}
