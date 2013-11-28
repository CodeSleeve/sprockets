<?php namespace Codesleeve\Sprockets\Directives;

class RequireTree extends BaseDirective
{
	public function process($directory)
	{
        $directory = $this->replaceSlashAndDot($directory);

		$files = $this->getFilesArrayFromFolder($this->manifestDir . $directory, $recursive = true, $this->parser->mime);

		return $files;
	}

}