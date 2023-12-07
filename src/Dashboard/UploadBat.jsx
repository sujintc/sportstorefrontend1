import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBat = () => {
  const batCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's bats",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];


  const [selectedbatCategory, setSelectedbatCategory] = useState(
    batCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedbatCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const batTitle = form.batTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const batDescription = form.batDescription.value;
    const batPDFURL = form.batPDFURL.value;

    const batObj = {
      batTitle,
      authorName,
      imageURL,
      category,
      batDescription,
      batPDFURL,
    };
    // console.log(dataObj)
    fetch("http://localhost:5000/upload-bat", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(batObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("bat updated successfully!!!!");
        form.reset();
      });
  };


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A bat!</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* bat name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="batTitle"
                value="bat Title"
              />
            </div>
            <TextInput
              id="batTitle"
              placeholder="bat Name"
              required
              type="text"
              name='batTitle'
              className='w-full'
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* bat url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="bat Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
            />
          </div>

          {/* bat category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="bat Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedbatCategory}
              onChange={handleChangeSelectedValue}
            >
              {batCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* full width div for bat description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="batDescription"
              value="bat Description"
            />
          </div>
          <Textarea
            id="batDescription"
            placeholder="bat Description"
            required
            type="text"
            name='batDescription'
            className='w-full'
            rows={4}
          />
        </div>


        {/* bat pdf url */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="batPDFURL"
              value="bat PDF Link"
            />
          </div>
          <TextInput
            id="batPDFURL"
            placeholder="Paste bat PDF URL here"
            required
            type="text"
            name='batPDFURL'
            className='w-full'
          />
        </div>


        {/* Submit btn */}
        <Button type="submit" className='mt-5'>
          Upload bat
        </Button>

      </form>
    </div>
  )
}

export default UploadBat