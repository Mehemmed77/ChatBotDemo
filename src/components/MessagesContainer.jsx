import Context from "./Context";
import FormHeader from "./Header";
import Message from "./Message";
import { useContext } from "react";

export default function MessagesContainer() {
    const {messages} = useContext(Context);

    return <>
        <FormHeader />
        <div className="chat-body">
            {messages.map((e) => <Message key={e.id} mD={e} />)}
        </div>
    </>
};