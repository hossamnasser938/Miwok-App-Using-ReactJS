# Issues
* Loading images from a local directory needs a webpack loader. Check that [link](https://stackoverflow.com/questions/45848055/image-you-may-need-an-appropriate-loader-to-handle-this-file-type). After that you use ` require ` method to get your image and pass the ` path ` of your image to ` require ` and store the result in a variable then you assign this variable to the ` src ` attribute of your ` <image> ` tag.
* To reference a file named example in the **same** directory ` ./example `.
* To reference a file named example in the **parent** directory ` ../example `.
