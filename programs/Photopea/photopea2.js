/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 11/20/20
*/
new explorer.window()
.resize(820, 580)
.center()
.title('PhotoPea Paint')
.icon('programs/Photopea/photopea.png')
.callback(function() {
	var win = this;
	this.body
	.css({'font-size':'10px'})
	.html(`
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<style>
*       {margin:0;padding:0;}
html, 
body    {height:100%;  width:100%; overflow:hidden;}
table   {height:100%;  width:100%; table-layout:static; border-collapse:collapse;}
iframe  {float:left; height:100%; width:100%;}
.header {border-bottom:1px solid #000}
.content {height:100%;}
</style>
</head>
<body>

<table>
  <tr>
      <td class="header">
          <h4>
              <a 
                href="Photopea">
               </a>
          </h4>
      </td>
  </tr>
  <tr>
      <td class="content">
      <iframe src="https://www.photopea.com" frameborder="0"></iframe>
    </td>
  </tr>
</table>

</body>
</html>
		`);
});