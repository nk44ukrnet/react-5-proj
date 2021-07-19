import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function imgName() {
    let currentDate = new Date().getMilliseconds();
    currentDate = Math.random();
    return `https://picsum.photos/200?rand=${currentDate}`;
}

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="ffa"
                    timeAgo="Today at 4:45PM"
                    comment="Comment 1"
                    avatar={imgName()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="ffa2"
                    timeAgo="Today at 2:00AM"
                    comment="Comment 2"
                    avatar={imgName()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author="ffa3"
                    timeAgo="Yesterday at 5:00PM"
                    comment="Comment 3"
                    avatar={imgName()}
                />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));