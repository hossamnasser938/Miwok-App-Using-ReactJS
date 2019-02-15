# Issues
* Loading images from a local directory needs a webpack loader. Check that [link](https://stackoverflow.com/questions/45848055/image-you-may-need-an-appropriate-loader-to-handle-this-file-type). After that you use ` require ` method to get your image and pass the ` path ` of your image to ` require ` and store the result in a variable then you assign this variable to the ` src ` attribute of your ` <image> ` tag.
* To reference a file named example in the **same** directory ` ./example `.
* To reference a file named example in the **parent** directory ` ../example `.

* The instructor used ` react-router ` version 2 or 3. This time version 4 changed things:
    * No ` history ` attribute in ` <Router> `.
    ```
    import { browserHistory } from 'react-router';
    <Router history={ browserHistory }>
    ```
    became:
    ```
    import { BrowserRouter } from 'react-router-dom';
    <BrowserRouter>
    ```
    certainly you need to install react-router-dom ` npm install --save react-router-dom `.
    * No ` <IndexRoute> `.
    ```
    import { IndexRoute } from 'react-router';
    <IndexRoute component={  }/>
    ```
    became:
    ```
    <Route exact path="/" component={  }/>
    ```
    * No nested Routes.
    ```
    <BrowserRouter>
        <Route path="/" component={ Root }>
            <Route path="/home" component={ Home }/>
            <Route path="/person" component={ Person }/>
        </Route>
    </BrowserRouter>
    ```
    Now use a component to wrap Routes.
    ```
    <BrowserRouter>
        <Root>
            <Route path="/home" component={ Home }/>
            <Route path="/person" component={ Person }/>
        </Root>
    </BrowserRouter>
    ```
    * To use ` <Link> ` you need to ` import ` it.
    ```
    import { Link } from 'react-router-dom';
    ```

* If a stateless component does not use props you can neglect it in declaration. Instead of :
```
export const Header = ( props ) => {
```
You van use:
```
export const Header = () => {
```
