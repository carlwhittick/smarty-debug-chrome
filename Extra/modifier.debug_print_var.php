{capture name='_smarty_debug' assign=debug_output}
{ldelim}
	assignd_vars: {ldelim}
	{foreach $assigned_vars as $vars}
		${$vars@key|escape:'html'}: {$vars|debug_print_var nofilter},
	{/foreach}
	{rdelim},
	config_vars: {ldelim}
	{foreach $config_vars as $vars}
		{$vars@key|escape:'html'}: {$vars|debug_print_var nofilter},
	{/foreach}
	{rdelim}
{rdelim}
{/capture}
<script type="text/javascript">
	{$id = $template_name|default:''|md5}
	var smarty_debug = {$debug_output nofilter};
	console.log(smarty_debug);
</script>
