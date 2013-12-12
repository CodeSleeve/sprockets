<?php namespace Codesleeve\Sprockets\Directives;

class RequireDirectory extends BaseDirective
{
	public function process($directory)
	{
		$realpath = realpath($this->manifestDir . '/' . $directory);

		if ($realpath === false) {
			throw new InvalidPathException('Cannot find directory path: ' . $directory);
		}

		$files = $this->getFilesArrayFromFolder($realpath, $recursive = false, $this->parser->mime);

		return $files;
	}
}