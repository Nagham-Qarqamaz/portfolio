import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import Button from "../components/Button";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .send(
                "service_mlyje5d",
                "template_bh8lfc6",
                form,
                "qk5ZPTV_zWzMK17MJ"
            )
            .then(() => {
                setStatus("sent");
                toast.success("Message sent!");
                setForm({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("error");
                toast.error("Failed to send message.");
            });
    };

    return (
        <Section title="Contact">
            <div className="flex justify-center items-center gap-12 flex-wrap">
                <SimpleCard
                    hoverEffect={false}
                    className="sm:px-8 py-8 w-fit max-w-[30rem] w-full"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto rounded space-y-4"
                    >
                        <div>
                            <div className="text-start block">Name:</div>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="text-[#000] w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div>
                            <div className="text-start block">Email:</div>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="text-[#000] w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div>
                            <div className="text-start block">Message:</div>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                className="text-[#000] w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Button
                                text="Send Message"
                                onClick={() => {}}
                                loading={status === "sending"}
                                loadingText="Sending..."
                                variant="white"
                            />
                        </div>
                    </form>
                </SimpleCard>
                <div className="flex justify-center">
                    <ContactInfo />
                </div>
            </div>
        </Section>
    );
};

export default Contact;
