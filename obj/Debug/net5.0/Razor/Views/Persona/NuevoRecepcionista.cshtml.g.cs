#pragma checksum "C:\Users\User\Sistema.Sanatorio\Views\Persona\NuevoRecepcionista.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6791118023904dbb22f01fffb14c36eb8cb5be40"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Persona_NuevoRecepcionista), @"mvc.1.0.view", @"/Views/Persona/NuevoRecepcionista.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\User\Sistema.Sanatorio\Views\_ViewImports.cshtml"
using Sistema.Sanatorio;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\User\Sistema.Sanatorio\Views\_ViewImports.cshtml"
using Sistema.Sanatorio.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6791118023904dbb22f01fffb14c36eb8cb5be40", @"/Views/Persona/NuevoRecepcionista.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f807a21698d6bc829104ad011bd2dc9bc9d925d8", @"/Views/_ViewImports.cshtml")]
    public class Views_Persona_NuevoRecepcionista : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/Persona/AgregarRecepcionista"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "POST", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("formulario"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/RecepcionistaJs/main.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\User\Sistema.Sanatorio\Views\Persona\NuevoRecepcionista.cshtml"
  
    ViewData["Title"] = "Nuevo Recepcionista";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""container"">
    <div class=""row"">
        <div class=""alert alert-success alert-dismissible fade show"" role=""alert"" id=""alerta"">
            <strong>Registro exitoso!</strong> El recepcionista fue agregado exitosamente.
            <button type=""button"" class=""close"" data-dismiss=""alert"" aria-label=""Close"">
                <span aria-hidden=""true"">&times;</span>
            </button>
        </div>

        <div class=""col-12 col-sm-12 col-lg-7 col-xl-7 col-md-7"">
            ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6791118023904dbb22f01fffb14c36eb8cb5be405508", async() => {
                WriteLiteral(@"
                <div class=""row"">
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Nombre</strong>
                            <input type=""text"" class=""form-control"" name=""Nombre"" id=""txtNombre"">
                        </div>
                    </div>
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Apellido</strong>
                            <input type=""text"" class=""form-control"" name=""Apellido"" id=""txtApellido"">
                        </div>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>DNI</strong>
                            <input type=""text"" class=""form-control"" name=""Dni"" id=""txtDni"">
                        </div>

                    </div>
                    ");
                WriteLiteral(@"<div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Fecha Nacimiento</strong>
                            <input type=""date"" class=""form-control"" name=""FechaNacimiento"" id=""dtpFechaNacimiento"">
                        </div>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Provincia</strong>
                            <select class=""form-control"" id=""cmbProvincia"">

                            </select>
                        </div>
                    </div>
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Localidad</strong>
                            <select class=""form-control"" name=""LocalidadId"" id=""cmbLocalidad"">

                            </select>
                        </div>
             ");
                WriteLiteral(@"       </div>
                </div>
                <div class=""form-group"">
                    <strong>Email <strong class=""text-danger"">(Opcional)</strong></strong>
                    <input type=""text"" class=""form-control"" name=""Email"" id=""txtEmail"">
                </div>
                <div class=""row"">
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Celular</strong>
                            <input type=""text"" class=""form-control"" name=""Celular"" id=""txtCelular"">
                        </div>
                    </div>
                    <div class=""col-6"">
                        <div class=""form-group"">
                            <strong>Telefono <strong class=""text-danger"">(Opcional)</strong></strong>
                            <input type=""text"" class=""form-control"" name=""Telefono"" id=""txtTelefono"">
                        </div>
                    </div>
                </div>
                ");
                WriteLiteral("<div class=\"form-group\">\r\n                    <strong>Turno</strong>\r\n                    ");
#nullable restore
#line 83 "C:\Users\User\Sistema.Sanatorio\Views\Persona\NuevoRecepcionista.cshtml"
               Write(Html.DropDownList("TurnoRecepcionista",
                    Html.GetEnumSelectList<Constantes.Clases.TurnoRecepcionista>(),
                    htmlAttributes: new { @class = "form-control", @name = "TurnoRecepcionista", @id = "cmbTurno" }));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-dark\" value=\"REGISTRAR\">\r\n                </div>\r\n            ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
        </div>
        <div class=""col-12 col-sm-12 col-lg-5 col-xl-5 col-md-5"">
            <div class=""columna-derecha"">
                <div class=""mensaje"">
                    <h4 class=""text-warning text-center"">Nuevo Recepcionista</h4>
                </div>
                <hr>
                <li class=""text-white"">Email: NO Requerido.</li>
                <li class=""text-white"">Telefono: NO Requerido.</li>
            </div>
        </div>
    </div>
</div>

<style>
    .columna-derecha {
        width: 100%;
        background: #1f2235;
        height: 100%;
        margin-left: 20px;
        margin-right: 20%;
    }

    .mensaje {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #alerta {
        display: none;
    }
</style>

");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6791118023904dbb22f01fffb14c36eb8cb5be4011961", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
