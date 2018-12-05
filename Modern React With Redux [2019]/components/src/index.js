import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail 
        author="Magnus" 
        timeAgo="Today at 4:50PM" 
        content="Jeg lærer React!" 
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Hilde" 
          timeAgo="Today at 2:00AM" 
          content="Jeg gjør matte..." 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Andreas" 
          timeAgo="Yesterday at 6:00AM" 
          content="Jeg går i motvind." 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));