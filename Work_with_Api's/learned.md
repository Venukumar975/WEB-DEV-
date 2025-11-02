1 . GET = getting data
    POST = posting data
    PUT = updating data
    DELETE = deleting data
    PATCH and OPTIONS 

    Now the Question is how we are going to tell our server what type of request we are using . This is also done through .fetch() since fetch takes 2 arguments
            const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{method: 'GET'})
            
