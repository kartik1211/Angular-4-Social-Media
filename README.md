MEAN Stack application using Angular 4.0

● Create the components below. ○ Login : displays login form ○ Registration : displays registration form ○ Home : After login page ○ Create Post : Display create form, with the following fields ■ Post title ■ Post description ○ List Posts : Display all the Posts created using create component and each block needs to have the following options ■ Comment ● Once the comment button is clicked, it should all the comments right below the container for the current post.

■ Like ● Once the like button is clicked, it should increment the comment count. ● Once the user clicks on the count, it needs to should the list of users who liked the posts. (use either bootstrap modal or title attribute of html to display the users who liked)

○ View Post : Displays details of a Post with option to view / create comments and like ○ Navigation : Displays navbar with dynamic links ● For login / registration page, the navbar will have the following links ○ Login

○ Registration ● Upon login the user should land on home page ○ Navigation component should be updated to display the links shown below. ■ Home ■ Create Post ■ List Posts ■ Logout

● Create separate services for auth and posts ● Use route guard and JWT tokens to make sure the user has logged. ● Apply the route guards for protecting Create user, List user and View user routes. ● Use Http interceptor to pass token value in the request headers.
