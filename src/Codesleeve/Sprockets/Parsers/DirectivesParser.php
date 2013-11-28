<?php namespace Codesleeve\Sprockets\Parsers;

use Codesleeve\Sprockets\Directives\RequireFile;
use Codesleeve\Sprockets\Directives\RequireDirectory;
use Codesleeve\Sprockets\Directives\RequireTree;
use Codesleeve\Sprockets\Directives\RequireSelf;
use Codesleeve\Sprockets\Directives\DependOn;
use Codesleeve\Sprockets\Directives\IncludeFile;
use Codesleeve\Sprockets\Directives\Stub;

class DirectivesParser extends PathParser
{
    /**
     * Returns an array of all the files inside of this manifest file
     * 
     * @param  string $manifestFilename
     * @return array
     */
    public function getFilesArrayFromDirectives($filename)
    {
        $filelist = array();
        $lines = ($filename) ? file($filename) : array();

        foreach ($lines as $line) {
            $filelist = array_merge($filelist, $this->findFilesFromDirective($line, $filename));
        }

        return array_unique($filelist);
    }

    /**
     * Get the files from the directive on this line
     * 
     * @param  string $line
     * @param  array $tokens
     * @return array
     */
    private function findFilesFromDirective($line, $filename, $tokens = array('//=', '*=', '#='))
    {
        $line = ltrim($line);
        
        if (!$line) {
            return array();
        }

        foreach ($tokens as $token) {
            if (strpos($line, $token) === 0) {
                $directive = trim(substr($line, strlen($token)));
                return $this->processDirective($directive, $filename);
            }
        }

        return array();
    }

    /**
     * Returns an array of file(s) based on directive
     * 
     * @param  string $directive
     * @param  string $filename
     * @return array
     */
    private function processDirective($line, $filename)
    {
        $directives = array(
            'require ' => new RequireFile($this, $filename),
            'require_directory' => new RequireDirectory($this, $filename),
            'require_tree' => new RequireTree($this, $filename),
            'require_self' => new RequireSelf($this, $filename),
            'depend_on ' => new DependOn($this, $filename),
            'include ' => new IncludeFile($this, $filename),
            'stub ' => new Stub($this, $filename)
        );

        foreach ($directives as $directive_name => $directive)
        {
            $param = $this->checkForDirective($directive_name, $line);
            
            if ($param) {
                return $directive->process($param);
            }
        }

        return new Directives\BaseDirective($this);
    }

    /**
     * See if the directive and diretive name match and if so, then we have a match and
     * should return the parameters of this directive on this line
     * 
     * @param  string $directive_name
     * @param  string $directive
     * @return 
     */
    private function checkForDirective($directive_name, $directive)
    {
        if (strpos($directive, $directive_name) === 0) {
            $param = trim(substr($directive, strlen($directive_name)));
            return ($param) ? $param : true;
        }

        return null;
    }

}