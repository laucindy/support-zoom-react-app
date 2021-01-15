import React, {useCallback, useEffect, useState} from "react";
import {Banner, Button, DatePicker, DisplayText, Form, FormLayout, Icon, Popover, Select, TextContainer, TextField} from '@shopify/polaris';
import { CalendarMajor } from '@shopify/polaris-icons';
import { useMutation, useQuery } from '@apollo/client';
import ADD_POST from './CreatePostMutation';
import GET_AUTHORS from './GetAuthorsQuery';

const NewPost = () => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  const [state, setState] = useState({
    title: "",
    content: "",
    selectedDate: today,
    user: "",
    category: "",
    tag1: "",
    tag2: "",
    tag3: "",
  });

  /* blog post date, and open/close calendar functionality */
  const [calendarView, setCalendarView] = useState({ month: state.selectedDate.getMonth(), year: state.selectedDate.getFullYear() })

  const handleChange = (e, elementName) => {
    setState({
      ...state,
      [elementName]: e
    })
  }

  const handleCalendarChange = (e) => {
    setState({
      ...state,
      selectedDate: e.start
    })
  }

  const handleMonthChange = useCallback((month, year) => {
  //  console.log(`in handleMonthChange: month: ${month}, year: ${year}`)
    setCalendarView({month, year})
  }, []);

  const [popoverActive, setPopoverActive] = useState(false);

  /* Opening and closing popovers have been separated, since clicking on the Date TextField element
    runs `openPopover` twice. One function that toggles the state won't work. 
    TO-DO: figure out why */
  const openPopover = useCallback(
    () => setPopoverActive(true), []
  );

  const closePopover = useCallback(
    () => setPopoverActive(false), []
  );

  /* Update author dropdown with list of all valid users */
  const [authors, setAuthors] = useState([]);
  const { _authorLoading, _authorError, _authorData } = useQuery(
    GET_AUTHORS,
    {
      onCompleted: (data) => {
        setAuthors(data.users.map(({ name }) => ({ label: name, value: name })));
  
        setState({
          ...state,
          user: data.users[0].name
        })
      }
    }
  );

  /* placeholder for category options */
  const categoryOptions = [
    {label: 'Software engineering', value: 'Software engineering'},
    {label: 'Tips & Tricks', value: 'Tips & Tricks'},
    {label: 'Thoughts', value: 'Thoughts'},
  ];

  /* debugging: test that all field states are set properly */
  useEffect(() => {
  //  console.log('useEffect, state:', state);
  }, [state])

  const activator = (
    <TextField type="text" 
              label="Date" 
              placeholder="Select a date..." 
              prefix={<Icon source={CalendarMajor} color="black"></Icon>}
              value={state.selectedDate.toLocaleDateString()}
              onFocus={openPopover}
    />
  );

  const [createdNewPost, setCreatedNewPost] = useState(false);
  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(
    ADD_POST,
    {
      onCompleted: (data) => {
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        setCreatedNewPost(true);
        setState({title: "", content: "", selectedDate: today, user: "", category: "", tag1: "", tag2: "", tag3: ""});
      },
      onError: (error) => {
        console.log("Error encountered: ", error);
      }
    }
  );

  const handleSubmit = useCallback((_event) => {
    addPost({ variables: { title: state.title, content: state.content, dateCreated: state.selectedDate, user: state.user, category: state.category, tag1: state.tag1, tag2: state.tag2, tag3: state.tag3 } });    
  }, [state, addPost]);

  return (
    <div style={{margin: '0 auto'}}>
      {createdNewPost ? <Banner title="Successfully created new post!" status="success" /> : ''}

      <TextContainer>
        <br />
        <DisplayText size="large">Create a new post</DisplayText>
        <br />

        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error: Please try again</p>}

        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField label="Title" value={state.title} onChange={e => handleChange(e, "title")} />
            <TextField label="Content" multiline={6} value={state.content} onChange={e => handleChange(e, "content")} />
            
            <Popover 
              active={popoverActive}
              activator={activator}
              onClose={closePopover}
            >
              <DatePicker 
                month={calendarView.month} 
                year={calendarView.year} 
                selected={state.selectedDate}
                onChange={handleCalendarChange}
                onMonthChange={handleMonthChange}
              />
            </Popover>

            <Select label="Author" options={authors} onChange={e => handleChange(e, "user")} value={state.user} />
            <Select label="Category" options={categoryOptions} onChange={e => handleChange(e, "category")} value={state.category} />

            <TextField label="Tag 1" value={state.tag1} onChange={e => handleChange(e, "tag1")} />
            <TextField label="Tag 2" value={state.tag2} onChange={e => handleChange(e, "tag2")} />
            <TextField label="Tag 3" value={state.tag3} onChange={e => handleChange(e, "tag3")} />

            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      </TextContainer>
    </div>
  )
};

export default NewPost;
