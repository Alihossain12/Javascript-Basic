function plugin(){
    console.log('Plugin Name: Javascript Basic');
}
plugin();

// Function Expression (Anonymous Function)
const plugin_version = function(version){
    console.log(`Plugin version ${version}`);
};
plugin_version("1.1.0");

// Arrow function 
const print_name = (name) => {
    console.log(`Author Name ${name}`);
};
print_name('Ali hossain');
