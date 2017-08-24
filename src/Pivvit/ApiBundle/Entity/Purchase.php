<?php

namespace Pivvit\ApiBundle\Entity;

/**
 * Purchase
 */
class Purchase
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $customerName;

    /**
     * @var int
     */
    private $quantity;

    /**
     * @var Offering
     */
    private $offering;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set customerName
     *
     * @param string $customerName
     *
     * @return Purchase
     */
    public function setCustomerName($customerName)
    {
        $this->customerName = $customerName;

        return $this;
    }

    /**
     * Get customerName
     *
     * @return string
     */
    public function getCustomerName()
    {
        return $this->customerName;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return Purchase
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set offering
     *
     * @param Offering $offering
     *
     * @return Purchase
     */
    public function setOffering(Offering $offering = null)
    {
        $this->offering = $offering;
        return $this;
    }
    /**
     * Get offering
     *
     * @return Offering
     */
    public function getOffering()
    {
        return $this->offering;
    }
}

