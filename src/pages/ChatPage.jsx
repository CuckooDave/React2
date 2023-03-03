import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
    return (
        <div>
            Chat page
            <div className="message-list">
                <Message author="Pero" text="Message1" />
                <Message author="Djuro" text="Message2" />
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};
