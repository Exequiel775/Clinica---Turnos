#pragma checksum "C:\Users\User\Sistema.Sanatorio\Views\Especialidad\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "87be6a7b488d8d8dcc5d9b852a8444b4f2c5b344"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Especialidad_Index), @"mvc.1.0.view", @"/Views/Especialidad/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"87be6a7b488d8d8dcc5d9b852a8444b4f2c5b344", @"/Views/Especialidad/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f807a21698d6bc829104ad011bd2dc9bc9d925d8", @"/Views/_ViewImports.cshtml")]
    public class Views_Especialidad_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/Especialidad.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("formulario-especialidad"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/EspecialidadJs/main.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\User\Sistema.Sanatorio\Views\Especialidad\Index.cshtml"
  
    ViewData["Title"] = "Especialidades";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "87be6a7b488d8d8dcc5d9b852a8444b4f2c5b3445329", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"

<div class=""container-lg"">
    <div class=""p-4 bg-dark"">
        <h3 class=""text-white text-center p-0"">
            ESPECIALIDADES
        </h3>
    </div>
</div>

<div class=""container mt-5"">
    <div class=""row"">
        <div class=""col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12"">
            <div class=""form-inline"">
                <div class=""form-group"">
                    <div class=""form-group filtro"">
                        <div class=""input-group"">
                            <div class=""input-group-prepend"">
                                <span class=""input-group-text"" id=""basic-addon1"">
                                    <svg xmlns=""http://www.w3.org/2000/svg"" width=""16"" height=""16"" fill=""currentColor""
                                        class=""bi bi-search"" viewBox=""0 0 16 16"">
                                        <path
                                            d=""M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-");
            WriteLiteral(@"1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"" />
                                    </svg>
                                </span>
                            </div>
                            <input type=""text"" class=""form-control txtBusqueda"" placeholder=""Username""
                                aria-label=""Username"" aria-describedby=""basic-addon1"">
                        </div>
                    </div>
                    <button type=""button"" class=""btn btn-primary buscar"">
                        Buscar
                    </button>
                    <!--
                    <label for=""input-buscar"">Buscar</label>
                    <div class=""form-group mx-sm-3"">
                        <input type=""text"" id=""input-buscar"" class=""form-control"">
                    </div>
                    <button type=""button"" class=""btn btn-primary"">
                        Buscar
                    </button>-->
                </div>
      ");
            WriteLiteral(@"      </div>
        </div>
    </div>

    <div class=""contenedor-tabla border border-danger"">
        <div class=""bg-danger p-2"">
            <div class=""row"">
                <div class=""col-6"">
                    <div class=""form-inline mt-1"">
                        <svg xmlns=""http://www.w3.org/2000/svg"" width=""20"" height=""20"" fill=""#fff"" class=""bi bi-list""
                            viewBox=""0 0 16 16"">
                            <path fill-rule=""evenodd""
                                d=""M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"" />
                        </svg>
                        <label class=""text-white ml-1"">Listado de especialidades</label>
                    </div>
                </div>
                <div class=""col-6"">
                    <div style=""float: right;"">
                        <button class=""btn btn-danger text-wh");
            WriteLiteral("ite nuevo\" id=\"nuevaEspecialidad\">Nuevo</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div");
            BeginWriteAttribute("class", " class=\"", 3327, "\"", 3335, 0);
            EndWriteAttribute();
            WriteLiteral(">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                    <thead");
            BeginWriteAttribute("class", " class=\"", 3462, "\"", 3470, 0);
            EndWriteAttribute();
            WriteLiteral(@">
                        <tr>
                            <th>Descripción</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody id=""tabla-especialidades"">
                        <!--
                        <tr>
                            <td>Medico Clinico</td>
                            <td>
                                <button class=""btn modificar"">
                                    <svg xmlns=""http://www.w3.org/2000/svg"" width=""25"" height=""20"" fill=""currentColor""
                                        class=""bi bi-pencil-square"" viewBox=""0 0 16 16"">
                                        <path
                                            d=""M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"" />
                                        <path");
            WriteLiteral(@" fill-rule=""evenodd""
                                            d=""M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Neumonologia</td>
                            <td>
                                <button class=""btn modificar"">
                                    <svg xmlns=""http://www.w3.org/2000/svg"" width=""25"" height=""20"" fill=""currentColor""
                                        class=""bi bi-pencil-square"" viewBox=""0 0 16 16"">
                                        <path
                                            d=""M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l");
            WriteLiteral(@"-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"" />
                                        <path fill-rule=""evenodd""
                                            d=""M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"" />
                                    </svg>
                                </button>
                            </td>
                        </tr>-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class=""contenedor-paginacion d-flex justify-content-between"">
        <label>
            Mostrando <strong id=""mostrando""></strong> de <strong id=""totalRegistros""></strong>registros
        </label>
        <div class=""contenedor-paginado"">
            <!--
            <button class=""btn border"">
                <svg xmlns=""http://www.w3.org/2000/svg"" width=""16"" h");
            WriteLiteral(@"eight=""16"" fill=""currentColor""
                    class=""bi bi-arrow-left-short"" viewBox=""0 0 16 16"">
                    <path fill-rule=""evenodd""
                        d=""M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"" />
                </svg>
            </button>
            <button class=""btn paginado"">1</button>
            <button class=""btn paginado"">2</button>
            <button class=""btn paginado"">3</button>
            <button class=""btn border"">
                <svg xmlns=""http://www.w3.org/2000/svg"" width=""16"" height=""16"" fill=""currentColor""
                    class=""bi bi-arrow-right-short"" viewBox=""0 0 16 16"">
                    <path fill-rule=""evenodd""
                        d=""M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"" />
                </svg>
            </button>
            --");
            WriteLiteral(@">
        </div>
    </div>
</div>

<!-- Modal -->
<div class=""modal fade"" id=""modalEspecialidad"" tabindex=""-1"" aria-labelledby=""modalEspecialidadLabel"" aria-hidden=""true"">
  <div class=""modal-dialog"">
    <div class=""modal-content"">
      <div class=""modal-header"">
        <h5 class=""modal-title"" id=""modalEspecialidadTitulo""></h5>
        <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
          <span aria-hidden=""true"">&times;</span>
        </button>
      </div>
    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "87be6a7b488d8d8dcc5d9b852a8444b4f2c5b34415158", async() => {
                WriteLiteral(@"
        <div class=""modal-body"">
            <div class=""form-group"">
                <label>Descripción</label>
                <input type=""text"" name=""Descripcion"" class=""form-control"" id=""descripcion"">
            </div>
        </div>
        <div class=""modal-footer"">
            <button type=""button"" class=""btn btn-danger"" data-dismiss=""modal"">Cerrar</button>
            <button type=""submit"" class=""btn btn-primary"">Grabar</button>
        </div>
    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "87be6a7b488d8d8dcc5d9b852a8444b4f2c5b34417091", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
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
