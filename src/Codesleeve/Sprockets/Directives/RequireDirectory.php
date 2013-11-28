<?php namespace Codesleeve\Sprockets\Directives;

class RequireDirectory extends BaseDirective
{
	public function process($directory)
	{
        $directory = $this->replaceSlashAndDot($directory);

		$files = $this->getFilesArrayFromFolder($this->manifestDir . $directory, $recursive = false, $this->parser->mime);

		return $files;
	}
}