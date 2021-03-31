import React, { useEffect, useState } from "react";
import { dbService } from "firebasefile";
import Nweet from "components/Nweet";

const Home = ({ userOjt }) => {
    const [text, setText] = useState("");
    const [texts, setTexts] = useState([]);
    useEffect(() => {
        dbService.collection("texts").onSnapshot(snapshot => {
            const textArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),

            }));
            setTexts(textArray);
        })
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("sns_app").add({
            text,
            createdAt: Date.now(),
            // creatorId: userOjt.uid,
        });
        setText("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setText(value);
    };

    return (<div>
        <form onSubmit={onSubmit}>
            <input value={text} onChange={onChange} type="text" placeholder="write here" maxLength={200} />
            <input type="submit" value="Submit" />
        </form>
        <div>
            {texts.map((nweet) => (
                <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userOjt.uid} />
            ))}
        </div>
    </div>
    );
};
export default Home;