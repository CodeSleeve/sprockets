<?php namespace Codesleeve\Sprockets\Directives;

class RequireSelf extends BaseDirective
{
	public function process()
	{
		return array($this->manifestFile);
	}

}